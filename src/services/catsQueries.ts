type FormArgs = {
  catText: string;
  searchTag: string | undefined;
};

export type Cat = {
  id: string;
  url: string;
};

export async function fetchCat({ catText, searchTag }: FormArgs): Promise<Cat> {
  const fetchUrl = new URL('https://cataas.com/cat?json=true');
  if (searchTag) {
    fetchUrl.pathname += `/${searchTag}`;
  }
  if (catText) {
    fetchUrl.pathname += `/says/${catText}`;
  }
  const response = await fetch(fetchUrl);

  if (!response.ok) {
    throw new Error(
      `Cat fetch failed. Text: ${catText ? catText : 'N/A'}. Tag: ${searchTag ? searchTag : 'N/A'}`,
    );
  }

  return await response.json();
}

export async function fetchCatTags(): Promise<string[]> {
  const response = await fetch('https://cataas.com/api/tags');

  if (!response.ok) {
    throw new Error('Cat tag fetch failed.');
  }

  return await response.json();
}
