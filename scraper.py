<<<<<<< HEAD
import requests
from bs4 import BeautifulSoup
req = requests.get("https://www.geeksforgeeks.org/")
soup =BeautifulSoup(req.content,"html.parser")
res =soup.title
print(res.prettify())
#print(soup.prettify())
=======
import requests
from bs4 import BeautifulSoup
req = requests.get("https://www.geeksforgeeks.org/")
soup =BeautifulSoup(req.content,"html.parser")
res =soup.title
print(res.prettify())
#print(soup.prettify())
>>>>>>> e8d2cedc83b37c3f6605eecbd3d255db2672d8b4
#print(soup.get_text())