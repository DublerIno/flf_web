# Raspberry Pi Deployment

This project ships with a production `Dockerfile` based on Next.js standalone output.

## Requirements

- Raspberry Pi with 64-bit OS recommended
- Docker installed on the Pi
- Port `3000` available, or pick a different host port

## Option 1: Build Directly On The Pi

Clone the repository on the Pi:

```bash
git clone https://github.com/DublerIno/flf_web.git
cd flf_web
git checkout main
```

Build the image:

```bash
docker build -t flf-web:latest .
```

Run the container:

```bash
docker run -d \
  --name flf-web \
  --restart unless-stopped \
  -p 3000:3000 \
  flf-web:latest
```

Open:

```text
http://<YOUR_PI_IP>:3000
```

## Option 2: Build Locally And Transfer The Image

Build an ARM64 image locally:

```bash
docker buildx build \
  --platform linux/arm64 \
  -t flf-web:latest \
  --output type=docker,dest=flf-web-arm64.tar .
```

Copy it to the Pi:

```bash
scp flf-web-arm64.tar pi@<YOUR_PI_IP>:/home/pi/
```

Load and run it on the Pi:

```bash
ssh pi@<YOUR_PI_IP>
docker load -i /home/pi/flf-web-arm64.tar
docker run -d \
  --name flf-web \
  --restart unless-stopped \
  -p 3000:3000 \
  flf-web:latest
```

## Updating The Deployment

On the Pi:

```bash
cd flf_web
git pull origin main
docker build -t flf-web:latest .
docker stop flf-web || true
docker rm flf-web || true
docker run -d \
  --name flf-web \
  --restart unless-stopped \
  -p 3000:3000 \
  flf-web:latest
```

## Useful Commands

View logs:

```bash
docker logs -f flf-web
```

Stop:

```bash
docker stop flf-web
```

Remove:

```bash
docker rm -f flf-web
```
