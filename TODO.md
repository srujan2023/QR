# Jenkins Fix TODO

- [x] Understand project and Jenkinsfile issues (syntax errors: git, duplicate docker build)
- [x] Create updated Jenkinsfile with fixes for Windows agent (bat instead of sh)
- [x] Push fixed Jenkinsfile to GitHub (main)
- [ ] Trigger new build in Jenkins "QR" job (http://localhost:8080 → QR → Build Now)
- [ ] Verify success: Docker image qr-app built, container qr-container on 3000
- [ ] Test app at http://localhost:3000
