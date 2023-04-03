from flask import Flask
from flask_restful import Api, Resource
import torch

app = Flask(__name__)
api = Api(app)

model = torch.hub.load('ultralytics/yolov5', 'yolov5x')

class Table(Resource):
    def get(self):
        im = './restaurants/Table2.jpeg'
        results = model(im)
        bboxes = results.pandas().xyxy[0].to_dict('records')
        return {'bounding_boxes': bboxes}

api.add_resource(Table, '/detect')

if __name__ == '__main__':
    app.run(debug=True)
