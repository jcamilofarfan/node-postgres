CREATE TABLE IF NOT EXISTS projects(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <>''),
    done BOOLEAN,
    projectid INTEGER NOT NULL
);


INSERT INTO projects(name, priority, description, deliverydate)
    VALUES('Make  Web Client', 1, 'Using Vanilla Javascript', '2020-09-10');

INSERT INTO projects(name, priority, description, deliverydate)
    VALUES('Make  Movil Client', 1, 'Using React Native', '2020-10-10');

INSERT INTO projects(name, priority, description, deliverydate)
    VALUES('Make  Desktop Client', 1, 'Using Electron', '2020-11-10');


INSERT INTO tasks(name, done, projectid)
    VALUES('Finish Platzi Course', false , 1),
        ('Install Expo', false , 2),
        ('Download Materialize-CSS', false , 1);

INSERT INTO tasks(name, done, projectId)
    VALUES('Desing UI', false , 2);
