import os
from flask import Flask, send_from_directory
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
#
cred = credentials.Certificate('hacknjit2021.json')
dbCreate = firebase_admin.initialize_app(cred, {
    'databaseURL': "https://hacknjit2021-default-rtdb.firebaseio.com"
})

print(dbCreate.name)
ref = db.reference('/')
# ref.set({
#     'testData':
#         {
#             'animal':{
#                 'name':'nemo',
#                 'species':'clownfish',
#                 'weight':30
#             }
#         }
# })
#animals

app = Flask(__name__, static_folder='./build/static')


@app.route('/', defaults={"filename": "index.html"})
@app.route('/<path:filename>')
def index(filename):
    return send_from_directory('./build', filename)
"""
def queryItems(self):
    testQuery = firebase_admin.db.Query.get()
    print(testQuery)
queryItems()
"""
app.run(
    host=os.getenv('IP', '0.0.0.0'),
    port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
)
