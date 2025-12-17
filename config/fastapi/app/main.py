from fastapi import FastAPI
from app.routers import static_content as endpoint
from app.routers import db_insert as insert
#from app.routers insert_user as insert


app = FastAPI(title="Mapbook API")

app.include_router(endpoint.router, prefix="/app")
app.include_router(insert.router, prefix="/app")

