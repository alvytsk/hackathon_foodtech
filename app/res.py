#!/usr/bin/python3
import cv2

banana_cascade = cv2.CascadeClassifier('classifiers/best_3.xml')

cam = cv2.VideoCapture(0)
ret, img = cam.read()
cv2.imshow('img', img)

while True:
    ret, img = cam.read()
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    k = cv2.waitKey(1)

    faces = banana_cascade.detectMultiScale(gray, 1.3, 5)
    for (x, y, w, h) in faces:
        img = cv2.rectangle(img, (x,y), (x+w,y+h), (255, 0, 0), 2)
    cv2.imshow('img', img)
#    cv2.imwrite("frame.png", img)

#cv2.waitKey(0)
cam.release()
cv2.destroyAllWindows()
