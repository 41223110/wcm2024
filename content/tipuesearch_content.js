var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: https://41223110.github.io/wcm2024/ \n 網誌:  https://41223110.github.io/wcm2024/blog \n 簡報:  https://41223110.github.io/wcm2024/reveal \n 倉儲:  https://github.com/mdecycu/wcm2024 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'codespaces', 'text': 'https://41223110.github.io/wcm2024/ \n chmod u+x init_replit \n ./init_replit \n 新增終端機 \n python3 main.py \n git add . \n git commit -m "更改內容" \n git push \n', 'tags': '', 'url': 'codespaces.html'}, {'title': 'W3', 'text': '個人倉儲納為分組倉儲的子模組 \n git submodule add github倉儲網址.git 學號 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W6', 'text': 'Git 是一個分布式版本控制系統，用於跟蹤文件的變化和協作開發。它由 Linus Torvalds 於 2005 年創建，最初是為了幫助管理 Linux 內核的開發。以下是 Git 的發展歷史以及相關創作者的簡歷： \n 2005 年：Linus Torvalds 創建了 Git，並在 Linux 內核開發中開始使用它。 \n 2005 年至今：Git 經歷了持續的發展和改進，吸引了全球範圍內的開發者和企業的廣泛采用。 \n Git 的關鍵版本和裏程碑： \n 2005 年：Git 1.0 發布。 2007 年：GitHub 成立，成為 Git 托管服務的主要平台之一，推動了 Git 的流行。 2008 年：Git 1.5 發布，引入了許多新功能和改進。 2013 年：Git 1.8 發布，引入了子模塊的支持等功能。 2016 年：Git 2.0 發布，帶來了性能和用戶體驗方面的改進。 2018 年：Git 2.18 發布，引入了一些新特性和改進。 2020 年：Git 2.28 發布，繼續改進性能和用戶體驗。 創作者簡歷： \n Linus Torvalds：芬蘭計算機程序員，Linux 內核的創建者和 Git 的創作者。他是開源軟件社區的重要人物之一，對計算機科學和開源社區產生了巨大影響。 使用 Git 的專業人士可以利用它來解決內容管理問題的各種方面，包括但不限於： \n 版本控制：Git 可以跟蹤文件的變化，使團隊成員能夠協作開發，並確保每個人都使用最新的代碼版本。這有助於避免沖突和混亂，同時也可以回溯歷史版本。 \n 分支管理：Git 允許創建分支，這使得團隊能夠並行開發不同的功能或修覆不同的 bug，而不會幹擾主線開發。分支可以輕松合並回主線，從而實現協作。 \n 遠程倉庫協作：Git 可以與遠程倉庫（如 GitHub、GitLab、Bitbucket 等）集成，使得多個開發者可以協作開發項目。他們可以推送（push）自己的更改到遠程倉庫，並拉取（pull）其他人的更改，從而實現協作開發。 \n 代碼審查：Git 的分支和提交歷史使得進行代碼審查變得更加容易。團隊成員可以通過查看提交歷史和比較不同分支之間的差異來進行代碼審查，從而確保代碼質量和一致性。 \n 備份和恢覆：Git 可以作為項目的備份工具，因為它可以存儲項目的完整歷史記錄。即使出現意外情況，例如誤刪文件，也可以通過 Git 來恢覆文件到之前的狀態。 \n 綜上所述，Git 是一個強大的工具，可以幫助專業人士解決內容管理問題，提高團隊的生產效率和代碼質量。', 'tags': '', 'url': 'W6.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};