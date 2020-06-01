import requests
import json
import csv

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
print(titles)

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
  print(tab[x][0])
  tab[x].insert(0, i)


print(tab[19])
data_file = open('news_test.csv', 'w')

# create the csv writer object
csv_writer = csv.writer(data_file)

# Counter variable used for writing
# headers to the CSV file
count = 0
index = 0

csv_writer.writerow(titles)

for article in articles:
    print(index)
    # Writing data of CSV file
    csv_writer.writerow(tab[index])
    index += 1
    count += 1

# print(count)

data_file.close()



# with open(read_json) as json_file:
#     data = json.load(read_json)
#
# employee_data = data['articles']
#
# # now we will open a file for writing
# data_file = open('news_test.csv', 'w')
#
# # create the csv writer object
# csv_writer = csv.writer(data_file)
#
# # Counter variable used for writing
# # headers to the CSV file
# count = 0
#
# for emp in employee_data:
#     if count == 0:
#         # Writing headers of CSV file
#         header = emp.keys()
#         csv_writer.writerow(header)
#         count += 1
#
#     # Writing data of CSV file
#     csv_writer.writerow(emp.values())
#
# data_file.close()
