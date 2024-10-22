const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'dist');
const targetDir = path.join(__dirname, '../../static/dist'); // Kopyalamak istediğin hedef klasör
// Hedef klasör yoksa oluştur
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Kopyalama fonksiyonu
const copyFiles = (src, dest) => {
    fs.readdir(src, (err, files) => {
        if (err) {
            console.error(`Kopyalama hatası: ${err}`);
            return;
        }

        files.forEach(file => {
            const srcFile = path.join(src, file);
            const destFile = path.join(dest, file);

            fs.stat(srcFile, (err, stats) => {
                if (err) {
                    console.error(`Hata: ${srcFile} - ${err}`);
                    return;
                }

                if (stats.isDirectory()) {
                    // Eğer klasörse, yeni bir hedef klasör oluştur ve içeriğini kopyala
                    fs.mkdir(destFile, { recursive: true }, (err) => {
                        if (err) {
                            console.error(`Klasör oluşturma hatası: ${destFile} - ${err}`);
                        } else {
                            copyFiles(srcFile, destFile); // Recursive kopyalama
                        }
                    });
                } else {
                    // Eğer dosyaysa, kopyala
                    fs.copyFile(srcFile, destFile, (err) => {
                        if (err) {
                            console.error(`Hata: ${srcFile} -> ${destFile}`);
                        } else {
                            console.log(`Kopyalandı: ${srcFile} -> ${destFile}`);
                        }
                    });
                }
            });
        });
    });
};

// Kopyalama işlemini başlat
copyFiles(sourceDir, targetDir);
