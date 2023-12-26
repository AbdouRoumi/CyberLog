# Contributions to CyBerLog
## Quick start

1. Fork the repository.  

2. Clone the forked repository :  

```bash
git clone https://github.com/${your_username}/CyberLog.git

3. Configure upstream repository :  

```bash
git remote add upstream https://github.com/AbdouRoumi/CyberLog.git
```

4. Make sure to fetch from upstream first :  

```bash
git pull upstream main
git push origin main # to update your remote fork
```

5. Make a separate branch :  

```bash
git checkout -b {Front-Back}-{Addition-Name}
```

6. Make changes locally.  

7. Add the affected files :  

```bash
git add /path/to/Changes
```

8. Commit your changes :  

```bash
git commit
```

9. Push your changes :  

```bash
git push origin {Front-Back}-{Addition-Name}
```

10. Make a pull request on Github.  

### Important note

**Always** pull from upstream before starting to make your local changes :  

```bash
git checkout main
git pull upstream main
git push origin main # to update your remote fork
```
