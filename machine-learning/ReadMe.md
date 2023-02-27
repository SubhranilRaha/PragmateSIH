## Instructions to start server
<br>

```
# install virtualenv
pip3 install virtualenv

# make sure you are inside the machine-learning folder
cd machine-learning

# create virtual environment
virtualenv env

# start the virtual env
source env/bin/activate
#windows-> .\env\Scripts\activate 

# install dependencies
pip install -r requirements.txt

# Run the app
python3 app.py

```

## Note :
<br>

- When you are done working and want to exit the virtual environment, use:
  ```
  deactivate
  ```

- If you install any new dependencies, please run this command to update requirements.txt:
  ```
  pip freeze > requirements.txt
  ```
  Again, make sure you are in `machine-learning` directory before running it
