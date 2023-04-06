package com.example.fitness.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.fitness.dao.ImageDAO;
import com.example.fitness.dao.SocialMediaDAO;
import com.example.fitness.entity.Comment;
import com.example.fitness.entity.Image;
import com.example.fitness.entity.Post;
import com.example.fitness.entity.Reaction;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/blog")
@CrossOrigin("*")
public class SocialMediaController {
	@Autowired
	private SocialMediaDAO socialMediaDAO;
	
	@Autowired
	private ImageDAO imageD;
	
	
	@PostMapping("/addPost")
	public Post createPost(@RequestPart("post") Post p , @RequestPart ("imageFile")MultipartFile[] file) {
		try {
			Set<Image> images = imageD.uploadImage(file);
			p.setPostImages(images);
			return socialMediaDAO.createPost(p);
		} catch (Exception ee) {
			System.out.println(ee.getMessage());
			return null;
		}
	 }
	
	 @PutMapping("/updatePost/{postId}")
	 public Post updatePost(@PathVariable("postId") Long postId, @Valid @RequestBody Post post) {
	    return socialMediaDAO.updatePost(postId, post);
	 }
	 
	 @GetMapping("/getPost/{postId}")
	 public Post getPost(@PathVariable Long postId) {
	   return socialMediaDAO.getPost(postId);
	 }
	 
	 @DeleteMapping("/deletePost/{postId}")
	 public ResponseEntity<?> deletePost(@PathVariable Long postId) {
		 socialMediaDAO.deletePost(postId);
	    return ResponseEntity.ok().build();
	  }
	 
	 @GetMapping("/getAllPosts")
	 public List<Post> getAllPosts() {
	   return socialMediaDAO.getAllPosts();
	 }
	
	@PostMapping("/addComment")
	public Comment createComment(@Valid @RequestBody Comment comment) {
	    return socialMediaDAO.createComment(comment);
	 }
	
	 @PutMapping("/updateComment/{commentId}")
	 public Comment updateComment(@PathVariable Long commentId, @Valid @RequestBody Comment comment) {
	    return socialMediaDAO.updateComment(commentId, comment);
	 }
	 
	 @GetMapping("/getComment/{commentId}")
	 public Comment getComment(@PathVariable Long commentId) {
	   return socialMediaDAO.getComment(commentId);
	 }
	 
	 @DeleteMapping("/deleteComment/{commentId}")
	 public ResponseEntity<?> deleteComment(@PathVariable Long commentId) {
		 socialMediaDAO.deleteComment(commentId);
	    return ResponseEntity.ok().build();
	  }
	 
	 @GetMapping("/getAllComments")
	 public List<Comment> getAllComments() {
	   return socialMediaDAO.getAllComments();
	 }
	 
	@PostMapping("/addReaction")
	public Reaction createReaction(@Valid @RequestBody Reaction reaction) {
	    return socialMediaDAO.createReaction(reaction);
	 }
	
	 @PutMapping("/updateReaction/{reactionId}")
	 public Reaction updateReaction(@PathVariable Long reactionId, @Valid @RequestBody Reaction reaction) {
	    return socialMediaDAO.updateReaction(reactionId, reaction);
	 }
	 
	 @GetMapping("/getReaction/{reactionId}")
	 public Reaction getReaction(@PathVariable Long reactionId) {
	   return socialMediaDAO.getReaction(reactionId);
	 }
	 
	 @DeleteMapping("/deleteReaction/{reactionId}")
	 public ResponseEntity<?> deleteReaction(@PathVariable Long reactionId) {
		 socialMediaDAO.deleteReaction(reactionId);
	    return ResponseEntity.ok().build();
	  }
	 
	 @GetMapping("/getAllReactions")
	 public List<Reaction> getAllReactions() {
	   return socialMediaDAO.getAllReactions();
	 }
}
