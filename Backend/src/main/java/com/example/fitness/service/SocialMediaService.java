package com.example.fitness.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fitness.dao.SocialMediaDAO;
import com.example.fitness.entity.Comment;
import com.example.fitness.entity.Post;
import com.example.fitness.entity.Reaction;
import com.example.fitness.repository.CommentRepository;
import com.example.fitness.repository.PostRepository;
import com.example.fitness.repository.ReactionRepository;
import com.example.fitness.repository.UserRepository;

@Service
public class SocialMediaService implements SocialMediaDAO {
	
	@Autowired
	private PostRepository postRepository;
	@Autowired
	private CommentRepository commentRepository;
	@Autowired
	private ReactionRepository reactionRepository;

	@Override
	public Post createPost(Post post) {
		// TODO Auto-generated method stub
		return postRepository.save(post);
	}

	@Override
	public Post updatePost(Long postId, Post post) {
		// TODO Auto-generated method stub
		Post existingPost = postRepository.findById(postId).orElse(null);
		existingPost.setTitle(post.getTitle());
	    existingPost.setText(post.getText());
	    existingPost.setCreatedAt(new Date());
		return postRepository.save(existingPost);
	}

	@Override
	public Post getPost(Long postId) {
		// TODO Auto-generated method stub
		return postRepository.findById(postId).orElse(null);
	}

	@Override
	public void deletePost(Long postId) {
		// TODO Auto-generated method stub
		postRepository.deleteById(postId);
	}

	@Override
	public List<Post> getAllPosts() {
		// TODO Auto-generated method stub
		return postRepository.findAll();
	}

	@Override
	public Comment createComment(Comment comment) {
		// TODO Auto-generated method stub
		return commentRepository.save(comment);
	}

	@Override
	public Comment updateComment(Long commentId, Comment comment) {
		// TODO Auto-generated method stub
		Comment existingComment = commentRepository.findById(commentId).orElse(null);
		existingComment.setText(comment.getText());
		existingComment.setAuthor(comment.getAuthor());
		existingComment.setCreatedAt(comment.getCreatedAt());
		existingComment.setPost(comment.getPost());
		return commentRepository.save(existingComment);
	}

	@Override
	public Comment getComment(Long commentId) {
		// TODO Auto-generated method stub
		return commentRepository.findById(commentId).orElse(null);
	}

	@Override
	public void deleteComment(Long commentId) {
		// TODO Auto-generated method stub
		commentRepository.deleteById(commentId);
	}

	@Override
	public List<Comment> getAllComments() {
		// TODO Auto-generated method stub
		return commentRepository.findAll();
	}

	@Override
	public Reaction createReaction(Reaction reaction) {
		// TODO Auto-generated method stub
		return reactionRepository.save(reaction);
	}

	@Override
	public Reaction updateReaction(Long reactionId, Reaction reaction) {
		// TODO Auto-generated method stub
		Reaction existingReaction = reactionRepository.findById(reactionId).orElse(null);
		existingReaction.setType(reaction.getType());
		existingReaction.setAuthor(reaction.getAuthor());
		existingReaction.setPost(reaction.getPost());
		return reactionRepository.save(existingReaction);
	}

	@Override
	public Reaction getReaction(Long reactionId) {
		// TODO Auto-generated method stub
		return reactionRepository.findById(reactionId).orElse(null);
	}

	@Override
	public void deleteReaction(Long reactionId) {
		// TODO Auto-generated method stub
		reactionRepository.deleteById(reactionId);
	}

	@Override
	public List<Reaction> getAllReactions() {
		// TODO Auto-generated method stub
		return reactionRepository.findAll();
	}

}
