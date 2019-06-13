#coding=utf-8

import socket
import sys

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostname()
port = 9080
serverSocket.bind((host, port))
serverSocket.listen(10)

while True:
    clientSocket,addr = serverSocket.accept()
    print("connect address:" + str(addr))
    #data = clientSocket.recv(1024)
    #print("data:" + str(data))
    clientSocket.send("cliendSocketMsg".encode('utf-8'))
    clientSocket.close()