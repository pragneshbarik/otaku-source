import requests
BASE = "http://127.0.0.1:5000/"

# response = requests.put(BASE + "video/4", {"name" : "some clickbait video" ,"views" : 100, "likes" : 25} )
get_response = requests.get(BASE + "video/6")
print(get_response)
