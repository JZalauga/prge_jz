from fastapi import APIRouter
from sqlalchemy import create_engine, text

from app.settings import db_name, db_user, db_password

router_delete = APIRouter()

def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )

@router_delete.delete("/delete_cemetery/{id}")
async def delete_user(id: int):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        params = {
            "id": id
        }

        sql_query = text("""
                         delete from cemetery where id = :id; 
                         """)

        with db_connection.connect() as conn:
            result = conn.execute(sql_query, params)
            conn.commit()
            print(result)


    except Exception as e:
        print(e)
        raise e

    return {"statu": 1}