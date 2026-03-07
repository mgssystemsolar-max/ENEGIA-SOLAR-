import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface Project {
  img: string;
  title: string;
  loc: string;
}

interface PortfolioDB extends DBSchema {
  projects: {
    key: string;
    value: Project[];
  };
}

const DB_NAME = 'mgs-portfolio-db';
const STORE_NAME = 'projects';
const KEY = 'portfolio-list';

let dbPromise: Promise<IDBPDatabase<PortfolioDB>>;

export const initDB = () => {
  if (!dbPromise) {
    dbPromise = openDB<PortfolioDB>(DB_NAME, 1, {
      upgrade(db) {
        db.createObjectStore(STORE_NAME);
      },
    });
  }
  return dbPromise;
};

export const saveProjectsToDB = async (projects: Project[]) => {
  const db = await initDB();
  await db.put(STORE_NAME, projects, KEY);
};

export const loadProjectsFromDB = async (): Promise<Project[] | undefined> => {
  const db = await initDB();
  return await db.get(STORE_NAME, KEY);
};
