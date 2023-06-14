# TableVision

1. Clone the repo
2. You will need to create the virtual environment
   ```python3 -m venv env```
3. You will need to activate ```env```
   ```source env/bin/activate```
4. Install all the dependecies needed for the backend 
   ```pip install -r https://raw.githubusercontent.com/ultralytics/yolov5/master/requirements.txt```
5. Download best.pt from TableVison GDrive and put it in the root directory

# Running TableVision

In one terminal you will need to activate the virutal environment for the backend and then you will need to run the detect.py script which will start the Flask Server. Then in another terminal you will need to cd into the frontend and type ```npm run dev``` and that should get it running locally.
