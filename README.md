# Boogle
## What is it?
![UI](./docs/_media/Screenshot%202026-04-20%20200815.png)

Boogle is a custom user interface for the metasearch engine [SearXNG](https://searxng.org). It was built using sveltekit and docker. I created it because I thought it would be fun and I wanted to learn more about docker and production deployments.
## Deployment
For production usage you can start with docker compose:
``` bash
docker compose -f docker-compose.prod.yml up
```
This will start a local searxng instance. Be sure to change the url at ```caddy/prod/Caddyfile``` also set up a firewall to ensure no traffic is allowed to your server except for ports <strong>443</strong> (https) and <strong>80</strong> (http). 
### Requirements
From my testing I figured out Searxng uses upp less than 512MB of memory and the web ui uses up ~80MB so to be safe I would recomend a instance with 2vcpus and 1GB of ram, but you could probably get away with 512MB of ram. Also note that building the image needs 2gb of Ram because of image optimization.
## Development
``` bash
# Install dependencies
npm i

# Runs on localhost (may take up to 15s to load dev server)
docker compose -f docker-compose.yml up -d
```
## Configuration
General configuration is located at:
```
src/lib/config.js
```
Searxng configuration is located at:
```
# change to searxng/.env before deployment
searxng/.env.example
```
and
```
searxng/core-config/settings.yml
```
## Performance 
<img style="height: 100px" alt="performance results" src="./docs/_media/Screenshot%202026-04-21%20073455.png" />

<strong>Absolute Cinema.</strong><br>
btw the perfomance is limited by how fast the searxng instance can search.
## Todo
* Add news results
* Fix the thing where after you submit on the form it takes forever to load
* ~~Fix the thing where after you submit on the form it takes forever to load~~
* Javascript debounce + auto complete
