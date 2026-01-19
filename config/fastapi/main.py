from fastapi import FastAPI

app = FastAPI(title="Mapbook API")

@app.get("/endpoint")
async def endpoint():
	return[{"imie": "Adrian"},
		{"imie": "Mateusz"},
		{"imie": "Bassan"},]

