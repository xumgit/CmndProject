#coding=utf-8

import socket
import sys

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostname()
port = 9980
serverSocket.bind(('', port))
serverSocket.listen(10)

while True:
    clientSocket,addr = serverSocket.accept()
    print("connect address:" + str(addr))
    data = clientSocket.recv(1024)
    if len(data) > 0:
        print("Server.py, data:" + str(data))
    else:
        break
    sendMsg = "Server to client msg"
    clientSocket.send(sendMsg.encode('utf-8'))
    clientSocket.close()