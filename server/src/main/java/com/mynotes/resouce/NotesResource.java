package com.mynotes.resouce;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.mynotes.handler.NotesCache;
import com.mynotes.model.Note;

@Path("/notes")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class NotesResource {

    @Inject
    private NotesCache notesCache;

    @GET
    public List<Note> notes() {
        return notesCache.notes();
    }



}
