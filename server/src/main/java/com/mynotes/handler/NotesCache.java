package com.mynotes.handler;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Singleton;

import com.mynotes.model.Note;

@Singleton
public class NotesCache {

    public List<Note> notes() {
        List<Note> ret = new ArrayList<>();
        ret.add(createNote(1L, "1) eins", "beschreibung eins\n hoho"));
        ret.add(createNote(2L, "2) zwei", "beschreibung zwei"));
        ret.add(createNote(3L, "3) drei", "beschreibung drei"));
        ret.add(createNote(4L, "4) vier", "beschreibung vier\n hoho"));
        ret.add(createNote(5L, "5) fuenf", "beschreibung fuenf\n1\n2\n3\n4\nletzte zeile"));
        return ret;
    }

    private Note createNote(long id, String title, String description) {
        Note ret = new Note();
        ret.setId(id);
        ret.setTitle(title);
        ret.setDescription(description);
        return ret;
    }

}
