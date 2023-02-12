<<<<<<< HEAD
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
=======
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
>>>>>>> e8d2cedc83b37c3f6605eecbd3d255db2672d8b4
t2.start()