from fastapi import APIRouter
from sqlalchemy import create_engine, text

from app.settings import db_name, db_user, db_password


router = APIRouter()

def connect_to_db(db_name: str, db_user: str, db_password: str):
	return create_engine(
		f"postgresql://{db_user}: {db_password}@postgis: 5432/{db_name}"
	)
	

@router.get("/insert_user")
async def insert_user():
	try:
		db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)
		# params = {
		# 	"name": request.name,
		# 	"posts": request.posts,
		# 	"location": request.location
		# }
		params = {
			"name": "ss",
			"posts": 67,
			"location": "Warszawa"
		}
		insert_query = text('''
INSERT INTO users(name, posts, location) VALUES (:name, :posts, :location);''')
		with db_connection.connect() as conn:
			result = conn.execute(insert_query, params)
			conn.commit()
			print(result)

	except Exception as e:
		print(e)
		raise e
	return


"""
konfiguracja geoserwera z 10 warstwami BDOT10K
na podstawie konfiguracji przygotować konfigurację usługi WMS
zrobić sprawozdanie

dołożyć do konfiguracji, którą mamy(remote) dodać fast api
do 9.01
"""