#coding=utf-8

import socket
import sys

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostname()
port = 9080
print('host:' + str(host) + ',port:' + str(port))
serverSocket.connect((host, port))
msg = serverSocket.recv(1024)
serverSocket.send("clientSendMsg".encode('utf-8'))
serverSocket.close()
print("msg:" + str(b'msg'))