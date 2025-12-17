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

		insert_query = text('''
INSERT INTO users(name, posts, location) VALUES ('Maciej', 3, 'Warszawa');

''')
		with db_connection.connect() as conn:
			result = conn.execute(insert_query)
			conn.commit()
			print(result)

	except Exception as e:
		print(e)
		raise e
	return