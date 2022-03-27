--DROP TABLE galleryItems;

CREATE TABLE galleryItems (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(150) NOT NULL,
"description" VARCHAR(200) NOT NULL,
"likes" INT DEFAULT 0
);

INSERT INTO galleryItems ("path", "description")
VALUES 
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/air_copy.jpg', 'I like air. I like to breathe, therefore it is good.'),
('images/alone.jpeg', 'I like to be alone. It allows me to focus on me.'),
('images/animals_copy.jpg', 'Animals are completely genuine, making them easier to understand.'),
('images/atom.jpeg', 'I would like to thank atoms for setting the stage for my existence. They are pretty cool.'),
('images/cup-of-coffee.jpeg', 'Coffee is Life'),
('images/glass_water.jpeg', 'The best drink after a hard days work'),
('images/home.jpeg', 'Here is my home. I like my home.'),
('images/knowledge.jpeg', 'Learning needs to become fun again, because it is.');

UPDATE galleryItems
SET "likes" = likes + 1
WHERE "id" = 3;