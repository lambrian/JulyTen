JulyTen - Personal Metric Aggregator
=====

Inspired by Reddit's /u/ryans01 "no more zero days" philosophy.


## Hooking into Loggr Data
### Use
Use Loggr's data storage on Dropbox Datastore as the primary backend on which to store data. 
### Difficulties Encountered: 
The biggest difficulty was finding out how to access my own data on Dropbox Datastore. The Datastore does not store information in the file directory, meaning it could not be accessed through that. Since all of the APIs were designed around building 3rd party applications for individual end users, there was no standard practice for me to follow to access Loggr's Datastore. This is understandable, since this would mean that an application could request access to all of a user's apps data, which is clearly undesirable. Instead, I found on the Developer's dashboard found [here]() the App Console, which lists all of the apps the current user has built. There is a subtab "Browse datastores" which allows the user to view the data stored by the apps they are using! Huzzah! To access the data programmatically, I found the access token granted to Loggr to post to my Dropbox in the element inspector as a data attribute access-token. With this access token, I could moonlight as Loggr accessing my own data. This, of course as mentioned before, does not map to an app with a user base, as it would grant an app access to other app's data. 
#### Lessons Learned
* Dropbox Datastore API
* OAuth routing

# Incorporating Goodreads API

### Use
pull rss feed of my own progress statuses and extract the the page count of each day, that difference between that sum and the previous day will determine the pages read in that day.

#### Difficulties encountered
The Goodreads API is not fun or easy to work with at all. Many natural requests (i.e. get all of a user's status updates) are not supported, and when they are, return XML instead of JSON. For better or for worse, the documentation is sparse and sometimes misses available endpoints altogether. For example, the RSS endpoint that I am using is not listed; instead, I found it when I saw an rss feed button on the page that lists all of a user's progress updates. Note that this is a work-around - this feed does not make available all of a user's updates, just their progress updates. To work with the RSS feed, I feed the RSS through Google's Feed API, which converts RSS to JSON. In testing, I was making the request every second, which was returning incorrect data. I know now that this is because the Feed API caches the responses of the feeds it crawls, meaning that subsequent calls I was making were not reaching Goodreads. I will not be making calls every second in production, but this exposed an interesting issue. A workaround discussed online was appending a unique parameter to the URL so that the FEED API cannot call on its cache, the most natural one being a current time parameter.

#### Lessons Learned
* Pains of XML data responses
* RESTful API design expectations
* Google Feed API Usage
* Perils of Caching and workarounds
