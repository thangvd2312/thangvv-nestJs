To run PostgreSQL on Docker, run the following in your Terminal:
docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
