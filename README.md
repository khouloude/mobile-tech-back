# mobile-tech-back

## Manual Installation

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```
## Commands

Running locally:

```bash
npm run dev
```
Testing:

```bash
# run all tests
npm run dev


## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=4040

# URL of the Mongo DB
MONGODB_URL=mongodb://localhost:27017/finances_db

# APP URL
APPLICATION_URL=http://localhost:4040

# CORS ORIGINS
CORS_ORIGINS=*
```

## Project Structure

```

### API Endpoints

List of available routes:

**Data routes**:\

`GET /api/v1/data` -get all data 
`POST /api/v1/data ({ name: string })` -add a line
`DELETE /api/v1/data ({ name: string })` -delete a line 
`PATCH /api/v1/data/:name ({ name: string })` -edit a line title
`POST /api/v1/data/:name/value ({ value: number })` -add a value to a line
`PATCH /api/v1/data/:name/value/:index ({ value: number })` -edit a value 

