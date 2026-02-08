from fastapi import FastAPI
from app.routers.static_content import router
from app.routers.db_insert import router_insert
from app.routers.dynamic_content import router_get_cemeteries, router_get_workers, router_get_clients
from app.routers.db_delete import router_delete
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(title="Mapbook API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(router, prefix="/app")
app.include_router(router_insert, prefix="/app")
app.include_router(router_get_cemeteries, prefix="/app")
app.include_router(router_get_workers, prefix="/app")
app.include_router(router_get_clients, prefix="/app")
app.include_router(router_delete, prefix="/app")

