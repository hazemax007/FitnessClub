package com.example.fitness.dao;

import java.util.List;

import com.example.fitness.entity.Comment;
import com.example.fitness.entity.Post;
import com.example.fitness.entity.Reaction;

public interface SocialMediaDAO {
	Post createPost(Post post);
	Post updatePost(Long postId, Post post);
	Post getPost(Long postId);
	void deletePost(Long postId);
	List<Post> getAllPosts();
	Comment createComment(Comment comment);
	Comment updateComment(Long commentId, Comment comment);
	Comment getComment(Long commentId);
	void deleteComment(Long commentId);
	List<Comment> getAllComments();
	Reaction createReaction(Reaction reaction);
	Reaction updateReaction(Long reactionId, Reaction reaction);
	Reaction getReaction(Long reactionId);
	void deleteReaction(Long reactionId);
	List<Reaction> getAllReactions();
}
