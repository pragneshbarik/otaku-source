from flask import Flask
from flask_restful import Api, Resource


app = Flask(__name__)
api = Api(app)



names = {
        "Pragnesh" : {"age" : 20, "gender" : "male"},
        "Rajesh" : {"age" : 30, "gender" : "male"}
        }

class Hello(Resource):
    def get(self, name) :
        return {"data":names[name]}

    def post(self) :
        return {"data" : "got a post request"}



api.add_resource(Hello, '/hello/<string:name>')


if __name__ == "__main__" :
    app.run(debug=True)