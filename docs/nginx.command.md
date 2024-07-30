<!-- install nginx  -->

<!-- 1. Reverse Proxy Nginx -->
```bash
sudo apt-get install -y nginx 
Run IP, not working, then try to open security.
cd /etc/nginx/sites-available

sudo vim default

location /api { 
 rewrite ^\/api\/(.*)$ /api/$1 break;
 proxy_pass  http://localhost:3051;
 proxy_set_header Host $host;
 proxy_set_header X-Real-IP $remote_addr;
 proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}


sudo systemctl restart nginx
```
<!-- 2. Add domain to nginx configuration -->

```bash
server_name chimxinh.online;

location / {
    proxy_pass http://localhost:3051; 
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

<!-- 3. add SSL to domain  -->
```bash
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python3-certbot-nginx
sudo certbot --nginx -d chimxinh.online
sudo certbot renew --dry-run
sudo systemctl status certbot.timer
```