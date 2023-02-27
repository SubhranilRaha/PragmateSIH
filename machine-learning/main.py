#import the faker module
from faker import Faker
#create a faker object
import json
fake =Faker()

def generate_data(records):

    #declaring an empty dictionary
    student={}
    for n in range(0,records):
        student[n]={}
        student[n]['id']=fake.random_number(digits=5)
        student[n]['email']=str(fake.email())
        student[n]['score']=fake.random_int(68,99)
    
    #writing the data into the json file
    with open('student.json','w') as fp:
        json.dump(student,fp)
    print("records added")

num = 2500
generate_data(num)