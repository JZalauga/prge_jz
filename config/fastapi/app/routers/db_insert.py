from fastapi import APIRouter
from sqlalchemy import create_engine, text


router = APIRouter()

def connect_to_db():
	return create_engine(
		f"postgresql://postgres: postgres@postgis: 5432/postgres"
	)
	

@router.get("/insert_user")
async def insert_user():
	try:
		db_connection = connect_to_db()

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