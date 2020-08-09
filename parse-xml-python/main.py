from xml.dom import minidom
import requests

xml = "[my xml here]"
parsedXML = minidom.parseString(xml) # parse XML with xml.dom.minidom

sitemapLocationElements = parsedXML.getElementsByTagName('loc') # get all elements with 'loc' tag name

locations = []

for element in sitemapLocationElements:
	locations.append(urlElement.firstChild.nodeValue); # add inner text of element to locations list

print(locations) # list of URLs from each location element
