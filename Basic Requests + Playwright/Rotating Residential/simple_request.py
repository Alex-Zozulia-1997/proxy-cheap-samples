import requests
import os
from dotenv import load_dotenv

load_dotenv()

user_name = os.getenv("USERNAME")
# user_name = "w4g76yre"
password = os.getenv("PASS")
print(user_name, password)
# Proxy settings
proxies = {
    "http": f"http://{user_name}:{password}@proxy.proxy-cheap.com:31112",
    "https": f"http://{user_name}:{password}@proxy.proxy-cheap.com:31112",
}

# Make the request
response = requests.get("https://ipv4.icanhazip.com", proxies=proxies)

# Print the response text (IP address)
print(response.text.strip())
