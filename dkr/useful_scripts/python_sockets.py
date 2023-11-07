import socket
import time

serverPort = 4000
serverIP = "10.10.154.48"


def tcp_connection():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((serverIP, serverPort))

        #Send get request to server
        gRequest = f"GET / HTTP/1.0\r\nHost: {serverIP}:{serverPort}\r\n\r\n"
        s.send(gRequest.encode('utf8'))

        #Retrieve data from get request
        while True:
            response = s.recv(1024)
            if (len(response) < 1):
                break
            data = response.decode("utf8")

        print(data)


def udp_connection():
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
        s.settimeout(1.0)
        message = b'final'

        start = time.time()
        s.sendto(message, (serverIP, serverPort))
        try:
            data, server = s.recvfrom(1024)
            end = time.time()
            elapsed = end - start
            print(f'{data}')
        except socket.timeout:
            print('REQUEST TIMED OUT')


#tcp_connection()
#udp_connection()
