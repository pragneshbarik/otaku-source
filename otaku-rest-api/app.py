import json
import os
import urllib
from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv
from flask import Flask, request, jsonify, make_response, Response
from flask_cors import CORS, cross_origin


app = Flask(__name__) 
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

load_dotenv(find_dotenv())
password = urllib.parse.quote(os.environ.get("MONGO_PWD"))
connection_string = f"mongodb+srv://pragnesh-barik:{password}@cluster0.rkh1i.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(connection_string)

anime_picks = client["otaku-db"]["anime-picks"]
anime_database = client["otaku-db"]["anime-data"]

class OtakuFunctions :
    def search_handler(self, search_string) :
        animes=anime_picks.aggregate([
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
        {'$limit' : 30}, 
        {'$project' : {'_id':0, 'uid':1, 'title':1}}])
        
        return (list(animes))
    
    def get_anime_by_id(self, uid) :
        anime = anime_database.find_one({'uid' : uid}, {'_id': 0})
        return anime


    def database_handler(self, uid_list) :
        # anime=anime_database.find_one({'uid': uid})
        animes = anime_database.aggregate([{
            '$match' : {'uid': { '$in' : uid_list}}
        }, 
        {'$project' : {'_id' : 0}}])
        
        return animes



    def recommender(self, uid, limit) :
        anime = anime_picks.find_one({"uid" : uid})
        rec_id = anime['recommendations']
        rec_data = []
        # uid_rec = anime_picks.find_one({"id" : rec_id[i]})['uid']
        uid_rec = anime_picks.aggregate([{
            '$match' : {'id': { '$in' : rec_id}}
        }, {'$sort' : {'popularity': 1}},
        {'$project' : {'_id' : 0,'uid' : 1}}])
        uid_list = [uid_in_dict['uid'] for uid_in_dict in list(uid_rec)[:limit]]
        rec_animes = self.database_handler(uid_list)
        return list(rec_animes)

helper = OtakuFunctions()


@app.route('/')
@cross_origin()
def greet() :
    greetings = {
        "Greeting Message" : "Hi! Welcome to Otaku API, maintained by www.github.com/pragneshbarik",
        "Routes": {
            "/" : "Greetings",
            "/search/<search_string>" : "Get 30 matching Anime titles and UID matching <search_string>.",
            "/anime/<uid>" : "Get anime data of the requested <uid>.",
            "/rec/<uid>/<limit>" : "Get recommendations of the requested <uid> limit the number of recommendations by <limit>.",
            }
        }
    return (greetings)


@app.route('/search/<string:search_string>', methods=['GET'])
@cross_origin()
def search(search_string) :
    if request.method == 'GET' :
        anime_list = helper.search_handler(search_string)
        return jsonify(anime_list)


@app.route('/animes/<int:uid>', methods=['GET'])
@cross_origin()
def anime_by_uid(uid) :
    if request.method == 'GET' :
        resp = jsonify(helper.get_anime_by_id(uid))
        return resp


@app.route('/rec/<int:uid>/<int:limit>', methods=['GET'])
@cross_origin()
def recommend(uid, limit) :
    if request.method == 'GET' :
        resp = jsonify(helper.recommender(uid, limit))
        return resp

# class Search(Resource) :
#      def get(self, search_string) :
#         anime_list = helper.search_handler(search_string)
#         return (anime_list)


# class JikanAPI(Resource) :    
#     def get(self, uid) :
#         return helper.jikan_handler(uid)

# class Recommend(Resource) :
#     def get(self, uid, limit) :
#         return helper.recommender(uid, limit)



# api.add_resource(Search, '/search/<string:search_string>')
# api.add_resource(JikanAPI, '/jikan?q=<int:uid>')
# api.add_resource(Recommend, '/rec/<int:uid>/<int:limit>')

if __name__ == "__main__" :
    app.run(debug=True)


