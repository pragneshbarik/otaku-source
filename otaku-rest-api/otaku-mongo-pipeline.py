import os
from jikanpy import Jikan
import urllib
import json
from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv
from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort
from flask_cors import CORS, cross_origin



app = Flask(__name__)
cors = CORS(app)
api = Api(app)

load_dotenv(find_dotenv())
password = urllib.parse.quote(os.environ.get("MONGO_PWD"))
print(password)

connection_string = f"mongodb+srv://pragnesh-barik:{password}@cluster0.rkh1i.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(connection_string)

anime_collection = client["otaku-db"]["anime-picks"]

class OtakuFunctions :
    def search_handler(self, search_string) :
        animes=anime_collection.aggregate([
        {
            '$search': {
            'index': 'searchAnime',
            'text': {
                'query': search_string,
                'path': {
                'wildcard': '*'
                }
            }
        }
        }, 
        {'$limit' : 20}, 
        {'$project' : {'_id':0, 'uid':1, 'title':1}}])
        
        return (list(animes))
    
    
    def jikan_handler(self, uid) :
        jikan = Jikan()
        anime = jikan.anime(uid)

        anime_data = {
            'title' : anime['title'],
            'score': anime['score'],
            'image_url': anime['image_url'],
            'trailer_url': anime['trailer_url'],
            'genres' : [genre['name'] for genre in anime['genres']]
        }

        return anime_data

    def recommender(self, uid, limit) :
        if limit>30 : limit = 30
        anime = anime_collection.find_one({"uid" : uid})
        rec_id = anime['recommendations']
        rec_data = []
        for i in range(limit) :
            uid_rec = anime_collection.find_one({"id" : rec_id[i]})['uid']
            rec_data.append(self.jikan_handler(uid_rec))
        
        return rec_data
helper = OtakuFunctions()


class Search(Resource) :
     def get(self, search_string) :
        anime_list = helper.search_handler(search_string)
        return (anime_list)


class JikanAPI(Resource) :    
    def get(self, uid) :
        return helper.jikan_handler(uid)

class Recommend(Resource) :
    def get(self, uid, limit) :
        return helper.recommender(uid, limit)



api.add_resource(Search, '/search/<string:search_string>')
api.add_resource(JikanAPI, '/jikan?q=<int:uid>')
api.add_resource(Recommend, '/rec/<int:uid>/<int:limit>')

if __name__ == "__main__" :
    app.run(debug=True)


