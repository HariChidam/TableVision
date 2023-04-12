from flask import Flask
from flask_restful import Api, Resource
import torch

app = Flask(__name__)
api = Api(app)

model = torch.hub.load('ultralytics/yolov5', 'custom', path='best.pt')

class Table(Resource):
    def get(self, room_id):
        if room_id == 'ross':
            im = './Rooms/Ross.JPEG'
        elif room_id == 'ugli':
            im = './Rooms/Ugli.jpg'
        elif room_id == 'skb':
            im = './Rooms/SKB.jpg'
        elif room_id == 'cccb':
            im = './Rooms/BBB.jpeg'
        elif room_id == 'Dude':
            im = './Rooms/BBB.jpeg'
        elif room_id == 'hatcher':
            im = './Rooms/Hatcher.jpg'
        elif room_id == 'pierpont':
            im = './Rooms/BBB.jpeg'
        elif room_id == 'BBB':
            im = './Rooms/BBB.jpeg'
        elif room_id == 'Palmer':
            im = './Rooms/Palmer.JPG'
        elif room_id == 'EQ':
            im = './Rooms/EQ.jpg'
        elif room_id == 'SocialWork':
            im = './Rooms/SocialWork.jpg'
        elif room_id == 'Math':
            im = './Rooms/Math.jpg'
        else:
            return {'error': 'Invalid room ID'}

        results = model(im)
        bboxes = results.pandas().xyxy[0].to_dict('records')
        return {'bounding_boxes': bboxes}

api.add_resource(Table, '/detect/<string:room_id>')

if __name__ == '__main__':
    app.run(debug=True)