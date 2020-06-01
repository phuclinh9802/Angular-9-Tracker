import requests
import json
import csv
import pandas as pd
import pymysql
from datetime import datetime as dt




url = ('http://newsapi.org/v2/top-headlines?'
       'country=us&'
       'apiKey=25acb99ee9c14efa9cbc84ee5761722b')
response = requests.get(url)

read_json = response.json()


with open('news_test.json', 'w') as file:
  json.dump(read_json, file, sort_keys=True, indent=4)

with open("news_test.json") as json_file:
  data = json.load(json_file)


articles = data['articles']

titles = list(articles[0].keys())

slice_object = slice(1, len(titles))

titles = titles[slice_object]

titles.insert(0, 'id')
titles.insert(1, 'name')

# one list of values
tab = []
leng = len(data['articles'])
values = []
i = 0
for x in range(leng):
  values = list(articles[x].values())
  slice_values = slice(1, len(values))
  values = values[slice_values]
  name = data['articles'][x]['source']['name']
  values.insert(0, name)
  tab.append(values)
  i += 1
  tab[x].insert(0, i)


data_file = open('news_test.csv', 'w')

# create the csv writer object
csv_writer = csv.writer(data_file)

# Counter variable used for writing
# headers to the CSV file
count = 0
index = 0

csv_writer.writerow(titles)

for article in articles:
    # Writing data of CSV file
    csv_writer.writerow(tab[index])
    index += 1
    count += 1

# print(count)

data_file.close()

input_file = 'news_test.csv'
output_file = 'news.csv'
cols_to_remove = 5 # Column indexes to be removed (starts at 0)

row_count = 0 # Current amount of rows processed

with open(input_file, "r") as source:
    reader = csv.reader(source)
    with open(output_file, "w", newline='') as result:
        writer = csv.writer(result)
        for row in reader:
            row_count += 1
            print('\r{0}'.format(row_count), end='') # Print rows processed
            del row[5]
            writer.writerow(row)



from dateutil.parser import parse

get_date_obj = parse('2020-06-01T16:13:20Z')
print(type(get_date_obj))

mydb = pymysql.connect( host='localhost', user='root', passwd="Linhphuc9802", db="newmovie")
cursor = mydb.cursor()
csv_data = csv.reader(open('news.csv'))

next(csv_data)
for row in csv_data:
    cursor.execute('INSERT INTO news(id, name, content, description, publishedAt, title, url, urlToImage) VALUES (%s, %s, %s, %s, %s , %s, %s, %s)', row)

mydb.commit()
cursor.close()
