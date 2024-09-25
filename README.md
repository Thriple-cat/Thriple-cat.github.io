# How to run the code -- with ruby and jekyll

1. Install ruby and jekyll
2. Run `bundle exec jekyll server` in the terminal
3. Go to `http://127.0.0.1:80/` to check the webpage

# Hoe to deploy on Github page

The workflow file is in

> .github/workflows

Copy the whole code into the github repository and it will automatically build the webpage.

# How to deply on other servers -- with static files

1. I have already generated all the static files in  `../_site` folder. If you want to re-generate the static files, you need to install ruby and jekyll and run `jekyll build`.
2. Upload the contents of the `_site` folder to the web directory on the server.
3. If you need to change the **port**: go to the `../_config.yml` file and change:
   ```
   prot: 80
   ```

# If need to add more things

If need to add papers:
	Go to `../_bibliography/references.bib` and add bib for new paper. It will automatically show in the webpage.

Because all the outputs are hard-coded, if need to add outputs, use this template code and change the Title, Name, Conference name, link and data, paste it in the correct place(you can search key words `new talks / new organisation / new outreach` to find the place):
	For talks:

```
<div class="row post-item" style="margin-top: 30px;">
        <div class="col-3">
        </div>
        <div class="col-9">
            <p class="paper_title">{Title}</p>
            <p class="paper_authors">{Name}</p>
            <a href="{Link}" class="conference_link">
                <p class="conference_name">{conference name}</p>
            </a>
            <p class="paper_authors">{date}</p>
        </div>
    </div>
```

    For Organisation

```
<div class="row" style="margin-top: 30px;">
        <div class="col-3">
        </div>
        <div class="col-9">
            <p class="paper_title">{Title}</p>
            <p class="paper_authors">{people}</p>
            <a href="{Link}" class="conference_link">
                <p class="conference_name">{conference}</p>
            </a>
            <p class="paper_authors">{date}</p>
        </div>
    </div>
```

    For Outreach

```
<div class="row" style="margin-top: 30px;">
        <div class="col-3">
        </div>
        <div class="col-9">
            <p class="paper_title">{Title}</p>
            <p class="paper_authors">{Name}</p>
            <a href="{Link}" class="conference_link">
                <p class="conference_name">{conference name}</p>
            </a>
            <p class="paper_authors">{date}</p>
        </div>
    </div>
```
