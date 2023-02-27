import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn import metrics
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import pickle


df = pd.read_csv(r"C:\Users\thisi\Desktop\SmartIndiaHack\machine-learning\server\SIH_1.csv")
print(df.head())

X = df[['Learning Outcomes %','Number of extra-curricular activities']]
y = df['Score']

X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.3,random_state=101)
model = LinearRegression()
model.fit(X_train,y_train)

y_pred = model.predict(X_test)


pickle.dump(model, open("tmodel.pkl","wb"))

model = pickle.load(open('tmodel.pkl','rb'))
print(model.predict([[56.7,6]]))
