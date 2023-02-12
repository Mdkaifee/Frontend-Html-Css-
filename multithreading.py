from time import sleep
from threading import *
class Hello(Thread):
    def run(self):
        for i in range(5):
         print("\nHello")
         sleep(1)
class Hiiii(Thread):
    def run(self):
        for i in range(5):
          print("\nHiiii")
          sleep(1)
t1=Hello()
t2=Hiiii()
t1.start()
t2.start()