

from faker import Faker
#create a faker object

#writing to csv
import csv

fake = Faker()

def generate_data(records):

    student={}
    for n in range (0,records):
        student[n]={}
        student[n]['id']=fake.random_number(digits=4)
        student[n]['email']=str(fake.email())
        student[n]['score1']=fake.random_int(68,99)
        student[n]['score2']=fake.random_int(55,93)
    
    fields = ['_key','id','email','score1','score2']

    #writing the data into a csv file
    filename = "student_records.csv"
    with open(filename,'w') as csvfile:
       writer=csv.DictWriter(csvfile,fieldnames=fields)
       writer.writeheader()
       writer.writerows(student)
    csvfile.close()
    print("records added")

num=10
generate_data(num)

