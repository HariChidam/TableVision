from flask import Flask
from flask_restful import Api, Resource
import torch

app = Flask(__name__)
api = Api(app)

model = torch.hub.load('ultralytics/yolov5', 'custom', path='best.pt')

class Table(Resource):
    def get(self, room_id):
        if room_id == 'ross':
            im = './Rooms/room1/room1.jpeg'
        elif room_id == 'ugli':
            im = './Rooms/room2/room2.jpeg'
        elif room_id == 'skb':
            im = './Rooms/room1/room1.jpeg'
        elif room_id == 'cccb':
            im = './Rooms/room2/room2.jpeg'
        elif room_id == 'Dude':
            im = './Rooms/room1/room1.jpeg'
        elif room_id == 'hatcher':
            im = './Rooms/room2/room2.jpeg'
        elif room_id == 'pierpont':
            im = './Rooms/room1/room1.jpeg'
        elif room_id == 'BBB':
            im = './Rooms/room2/room2.jpeg'
        else:
            return {'error': 'Invalid room ID'}

        results = model(im)
        bboxes = results.pandas().xyxy[0].to_dict('records')
        return {'bounding_boxes': bboxes}

api.add_resource(Table, '/detect/<string:room_id>')

if __name__ == '__main__':
    app.run(debug=True)