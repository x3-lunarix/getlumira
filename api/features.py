from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
        features = [
            {
                "icon": "magic",
                "title": "Advanced Scripts",
                "description": "Premium Roblox scripts with anti-ban protection",
                "color": "#8B5CF6"
            },
            {
                "icon": "fast",
                "title": "Instant Updates",
                "description": "Regular script updates to bypass detection",
                "color": "#3B82F6"
            },
            {
                "icon": "custom",
                "title": "Custom Requests",
                "description": "Get scripts tailored for your specific game",
                "color": "#10B981"
            }
        ]
        
        response = {
            "status": "success",
            "data": features
        }
        
        self.wfile.write(json.dumps(response).encode())
        return
