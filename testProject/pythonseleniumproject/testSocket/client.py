#coding=utf-8

import socket
import sys

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = socket.gethostname()
port = 9980
print('host:' + str(host) + ',port:' + str(port))
serverSocket.connect(('127.10.11.12', port))
serverSocket.send("client to server msg".encode('utf-8'))
msg = serverSocket.recv(1024)  
print("clien.py, msg:" + str(msg))